const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const IssueTable = () => {
  const rowStyle = {
    "border": "1px solid"
  };
  const issues = [{ Id: 5, Title: "this is 5th issue" }, { Id: 6, Title: "this is 6th issue" }]


  const IssueRow = (props) => {
    return (<>
      <tr>
        <td style={props.rowStyle}>{props.Id}</td>
        <td style={props.rowStyle}>{props.Title}</td>

      </tr>
    </>)
  }

  const issueRow = issues.map((issue, key) => (
    <IssueRow rowStyle={rowStyle} Id={issue.Id} Title={issue.Title} />
  ))

  return (<>
    <h1>Issue Table</h1>
    <table style={rowStyle}>
      <thead>
        <tr>
          <th>ID</th>

          <th>table header</th>
        </tr>
      </thead>
      <tbody>

        <IssueRow rowStyle={rowStyle} Id={3} Title={"This is third issue"} />
        <IssueRow rowStyle={rowStyle} Id={4} Title={"This is Fourth issue"} />
        {issueRow}
      </tbody>
    </table>
  </>);
};

const AddIssue = () => {
  return <h1>Add Issue</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <IssueFilter />¸
    <hr />
    <IssueTable />
    <hr />
    <AddIssue />
  </React.StrictMode>
);
