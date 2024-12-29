export default function TransformationSection() {
  return (
    <section className="transformation" id="transformation">
      <h2 className="section-title animate-fade-in">
        Witness The Transformation
      </h2>
      <div className="before-after">
        <div className="before-after-container animate-slide-in">
          <div className="image-container">
            <div className="overlay">
              <p className="overlay-text">Before</p>
            </div>
            <img
              src="new-images/before1.jpeg"
              alt="Before Mowing"
              className="before-image"
              loading="lazy"
            />
          </div>
          <div className="image-container">
            <div className="overlay">
              <p className="overlay-text">After</p>
            </div>
            <img
              src="new-images/after1.jpeg"
              alt="After Mowing"
              className="after-image"
              loading="lazy"
            />
          </div>
        </div>
        <p className="animate-slide-in">
          Explore the stunning transformation our service brings to the toughest
          terrains.
        </p>
      </div>
    </section>
  );
}
