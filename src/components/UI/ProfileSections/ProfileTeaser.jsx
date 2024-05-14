export default function ProfileTeaser({ p: { projectName, description, github, deployedLink, backgroundImage } }) {
  
  const descriptionConcat = `(${description})`;

  return (
    <>
      <div className="ms-2 me-auto project" style={{ 
      backgroundImage: `url(${backgroundImage})`}}>
        <h2 className="fw-bold mb-1">{projectName}</h2>
        <h5 className="mb-1">{descriptionConcat}</h5>
        <a href={`${github}`}>Github Site</a><br/>
        <a href={`${deployedLink}`}>Deployed Site</a>
      </div>
    </>
  );
}
