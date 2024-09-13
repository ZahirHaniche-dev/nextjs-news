"use client";

export default function FilterError({ error }) {
  console.log("Error component rendered with error:", error);

  return (
    <div id="error">
      <h2>An error occurred</h2>
      <p>{error?.message || "Unknown error"}</p>
    </div>
  );
}