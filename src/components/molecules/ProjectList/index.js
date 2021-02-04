const ProjectList = ({ data }) => {
  const { title, list } = data;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ul>
          {list.map((project) => {
            const { title, date, content, projectBrief } = project;
            return (
              <li>
                <h3>
                  {title} {date}
                </h3>
                <p>{content}</p>
                <ul>
                  {projectBrief.map((pb) => {
                    const { title, content } = pb;
                    return (
                      <li>
                        {title}:
                        <div style={{ paddingLeft: '30px' }}>{content}</div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
