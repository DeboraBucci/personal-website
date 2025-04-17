import styled from "styled-components";
import Link from "../../UI/Link";

type ProjectProps = {
  project: any;
  language: string;
};

const Project: React.FC<ProjectProps> = ({
  project: { title, description, image, link, host, tags },
  language,
}) => {
  return (
    <Root key={`project-${title}`}>
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="content">
        <ul>
          {tags.map((tag: string) => (
            <li>
              <span style={{ color: "#D83CFF" }}>#</span>{" "}
              <p style={{ color: "#c3b1c7" }}>{tag}</p>
            </li>
          ))}
        </ul>

        <h3>{title}</h3>
        <p>{description[language]}</p>
      </div>

      {(link || host) && (
        <div className="btns">
          {host && (
            <Link href={host}>
              <button className="btn btn--link">
                <i className="fa-solid fa-link"></i>
                <div className="link-text">Link to website</div>
              </button>
            </Link>
          )}

          <Link href={link}>
            <button className="btn btn--github">
              <i className="fa-brands fa-github"></i>
              <div className="link-text">Link to Github respository</div>
            </button>
          </Link>
        </div>
      )}
    </Root>
  );
};

export default Project;

const Root = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #2b2b2b;
  border-radius: 1.1rem;

  &:hover {
    .image-container img {
      transform: scale(1.2);
    }
  }

  .btns {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 20;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
    border-radius: 1.2rem;
    background-color: #2b2b2b;
  }

  .btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d83cff;
    background-color: transparent;
    height: 4rem;
    width: 4rem;
    padding: 0;
    border-width: 2px;
    border-color: rgba(154, 154, 154, 0.5);
    border-radius: 50%;
  }

  .image-container {
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    height: 30rem;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      background-color: rgba(53, 10, 73, 0.5);
    }

    & img {
      transition: all 0.2s;
    }
  }

  .content {
    padding: 1rem 1.5rem 2rem 1.5rem;
    height: 18rem;
  }

  .link-text {
    display: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.6rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & p {
      color: white;
      margin: 0;
      padding: 0;
      line-height: 0;
    }
  }

  h3 {
    color: #dddddd;
    font-size: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: #dfdfdf;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    word-spacing: 0.2rem;
    line-height: 1.8rem;
  }
`;
