function SplineBackground() {
  return (
    <div className="w-full h-full relative">
      <iframe
        src="https://my.spline.design/untitled-9cf1fdb4c9d01b37029b8d0c1a2e4dd0/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="Spline 3D Background"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#010101] pointer-events-none" />
    </div>
  );
}

export default SplineBackground;
