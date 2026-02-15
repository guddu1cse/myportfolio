import React, { useState, useEffect, useRef } from "react";
import { gitHubApi } from "../config/config";

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]); // Store all fetched projects
  const [projects, setProjects] = useState([]); // Store currently visible projects
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 9; // Number of projects to show per "page" (client-side)
  const projectRefs = useRef([]);
  const [visibleProjects, setVisibleProjects] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Fetch all repositories (up to 100) in a single call
        const response = await fetch(
          `${gitHubApi}?per_page=100`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();

        const formattedProjects = data.map((project) => ({
          name: project.name,
          link: project.html_url,
          description: project.description || "",
          created_at: new Date(project.created_at), // Parse date for sorting
        }));

        // Sort projects: Description exists first, then Newest first, then by description length
        formattedProjects.sort((a, b) => {
          if (a.description === "MountBlue Technologies Training") a.description = "";
          if (b.description === "MountBlue Technologies Training") b.description = "";
          const aHasDesc = a.description.length > 0;
          const bHasDesc = b.description.length > 0;

          // 1. Projects with descriptions come first
          if (aHasDesc && !bHasDesc) return -1;
          if (!aHasDesc && bHasDesc) return 1;

          // 2. Primary sort: Creation date (descending)
          if (b.created_at - a.created_at !== 0) {
            return b.created_at - a.created_at;
          }
          // 3. Secondary sort: Description length (descending)
          return b.description.length - a.description.length;
        });

        setAllProjects(formattedProjects);

        // Initial load of visible projects
        setProjects(formattedProjects.slice(0, perPage));

        if (formattedProjects.length <= perPage) {
          setHasMore(false);
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Update visible projects when page changes
  useEffect(() => {
    if (page === 1) return; // Skip initial load handled in fetchProjects

    const nextProjects = allProjects.slice(0, page * perPage);
    setProjects(nextProjects);

    if (nextProjects.length >= allProjects.length) {
      setHasMore(false);
    }
  }, [page, allProjects]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      const updates = {};
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          updates[index] = true;
        }
      });
      setVisibleProjects((prev) => ({ ...prev, ...updates }));
    }, observerOptions);

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section id="projects" className="text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold neon-glow mb-8 text-center">
        Projects
      </h2>
      {loading && !projects.length && (
        <div style={{ color: "white", textAlign: "center" }}>
          Loading projects...
        </div>
      )}
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            data-index={index}
            style={{
              opacity: visibleProjects[index] ? 1 : 0,
              transform: visibleProjects[index]
                ? "translateY(0)"
                : "translateY(100px)",
              transition: `opacity 0.8s ease-out ${(index % perPage) * 0.1 // Stagger animation based on index in current view
                }s, transform 0.8s ease-out ${(index % perPage) * 0.1}s`,
            }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 text-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-neon transition-colors duration-300"
              >
                {project.name}
              </a>
            </h3>
            <p className="text-gray-300">{project.description.length > 0 ? project.description : "No description available"}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
