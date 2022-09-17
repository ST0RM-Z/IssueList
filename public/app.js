const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueTable = () => {
  const rowStyle = {
    "border": "1px solid"
  };
  const issues = [{
    Id: 5,
    Title: "this is 5th issue"
  }, {
    Id: 6,
    Title: "this is 6th issue"
  }];

  const IssueRow = props => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: props.rowStyle
    }, props.Id), /*#__PURE__*/React.createElement("td", {
      style: props.rowStyle
    }, props.Title)));
  };

  const issueRow = issues.map((issue, key) => /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: issue.Id,
    Title: issue.Title
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", {
    style: rowStyle
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "table header"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: 3,
    Title: "This is third issue"
  }), /*#__PURE__*/React.createElement(IssueRow, {
    rowStyle: rowStyle,
    Id: 4,
    Title: "This is Fourth issue"
  }), issueRow)));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), "\xB8", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));