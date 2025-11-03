import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const images = Array.isArray(project.img) ? project.img : [project.img];
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article
      className="project-tile w-full sm:w-[80%] md:w-[60%] font-geist"
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <div
        className="cursor-pointer"
        onClick={toggleExpand}
        style={{
          padding: "1.5rem 1rem",
          borderRadius: "12px",
          backgroundColor: isExpanded
            ? "rgba(199,199,199,0.08)"
            : "transparent",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = "rgba(199,199,199,0.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        <div className="flex items-center gap-4">
          <h4 className="font-semibold" style={{ margin: 0 }}>
            {project.title}
          </h4>

          <div
            className="flex-1"
            style={{
              height: "1px",
              background: "rgba(156, 163, 175, 0.3)",
              margin: "0 1rem",
            }}
          />

          <div className="flex-shrink-0 text-xs text-muted whitespace-nowrap">
            {project.year}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "0.7rem",
                  borderTop: "1px solid rgba(156, 163, 175, 0.2)",
                }}
              >
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.tech && project.tech !== "na" && (
                  <div style={{ marginBottom: "1rem" }}>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.tech) ? (
                        project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-fg"
                            style={{
                              backgroundColor: "rgba(156, 163, 175, 0.1)",
                              color: "rgba(207, 207, 207, 1)",
                              marginRight: "1rem",
                            }}
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <span
                          className="text-fg"
                          style={{
                            backgroundColor: "rgba(156, 163, 175, 0.1)",
                            color: "rgba(207, 207, 207, 1)",
                          }}
                        >
                          {project.tech}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {project.img && project.img !== "na" && (
                  <div
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={images[currentImageIndex]}
                            alt={`${project.title} screenshot ${
                              currentImageIndex + 1
                            }`}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "cover",
                              borderRadius: "8px",
                              display: "block",
                            }}
                          />
                        </motion.div>
                      </AnimatePresence>

                      {hasMultipleImages && (
                        <>
                          <button
                            onClick={goToPrevious}
                            style={{
                              position: "absolute",
                              left: "8px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              border: "none",
                              color: "white",
                              padding: "6px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "background-color 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(199,199,199,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(0, 0, 0, 0.5)";
                            }}
                          >
                            <FiChevronLeft size={20} />
                          </button>

                          <button
                            onClick={goToNext}
                            style={{
                              position: "absolute",
                              right: "8px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              border: "none",
                              color: "white",
                              padding: "6px",
                              borderRadius: "4px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "background-color 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(199,199,199,0.08)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(0, 0, 0, 0.5)";
                            }}
                          >
                            <FiChevronRight size={20} />
                          </button>

                          <div
                            style={{
                              position: "absolute",
                              bottom: "12px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: "rgba(0, 0, 0, 0.18)",
                              padding: "6px 12px",
                              borderRadius: "12px",
                              color: "white",
                              fontSize: "12px",
                              fontWeight: "500",
                            }}
                          >
                            {currentImageIndex + 1} / {images.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-4">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        border: "1px solid rgba(156, 163, 175, 0.5)",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        color: "rgba(156, 163, 175, 1)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "black";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "rgba(156, 163, 175, 1)";
                      }}
                    >
                      View Live
                    </a>
                  )}

                  {project.repo &&
                    project.repo !== "#" &&
                    project.repo !== "na" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          border: "1px solid rgba(156, 163, 175, 0.5)",
                          padding: "6px 12px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "var(--fg)";
                        }}
                        className="font-geist text-fg"
                      >
                        VIEW REPO
                      </a>
                    )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
