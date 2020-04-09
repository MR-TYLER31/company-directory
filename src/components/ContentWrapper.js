import React from "react";
import API from "../utils/API";
import DisplayEmployees from "./DisplayEmployees";
import SearchFilter from "./SearchFilter";

class ContentWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: [],
      search: "",
      isLoading: true
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.sortByNameAsc = this.sortByNameAsc.bind(this);
    this.sortByNameDesc = this.sortByNameDesc.bind(this);
    this.sortByDateAsc = this.sortByDateAsc.bind(this);
    this.sortByDateDesc = this.sortByDateDesc.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    API.search().then(results => {
      // console.log(results.data.results);
      return this.setState({
        employee: results.data.results,
        isLoading: false
      });
    });
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  sortByNameAsc(key) {
    this.setState({
      employee: this.state.employee.sort(function(a, b) {
        var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      })
    });
  }

  sortByNameDesc(key) {
    this.setState({
      employee: this.state.employee.sort(function(a, b) {
        var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      })
    });
  }

  sortByDateAsc(key) {
    this.setState({
      employee: this.state.employee.sort(function(a, b) {
        var nameA = a.registered.date; // ignore upper and lowercase
        var nameB = b.registered.date; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      })
    });
  }

  sortByDateDesc(key) {
    console.log("click");
    this.setState({
      employee: this.state.employee.sort(function(a, b) {
        var nameA = a.registered.date; // ignore upper and lowercase
        var nameB = b.registered.date; // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      })
    });
  }

  render() {
    return (
      <div>
        <SearchFilter
          search={this.state.search}
          updateSearch={this.updateSearch}
        />
        {this.state.isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <DisplayEmployees
            results={this.state.employee}
            search={this.state.search}
            sortByNameAsc={this.sortByNameAsc}
            sortByNameDesc={this.sortByNameDesc}
            sortByDateAsc={this.sortByDateAsc}
            sortByDateDesc={this.sortByDateDesc}
          />
        )}
      </div>
    );
  }
}

export default ContentWrapper;
