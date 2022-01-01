import { useRef, useEffect } from "react";
import { select } from "d3-selection";

function ProgressBar({ width, progress, target }) {
  const svgRef = useRef();
  const data = [
    { width: width, color: "gray" },
    { width: (progress / target) * width, color: "green" },
  ];

  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", (d) => d.width)
      .attr("height", 25)
      .attr("fill", (d) => d.color)
      .attr("stroke", "gray");
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className="progress-bar"
        width={width}
        height={25}


      ></svg>

        <span className="progress">
          {progress}/{target}
        </span>
    </>
  );
}

export default ProgressBar;
