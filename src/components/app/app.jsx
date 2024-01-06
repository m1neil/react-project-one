import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeeList from "../employee-list/employee-list";
import FormAddEmployee from "../form-add-employee/form-add-employee";

import "./app.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               name: "John C.",
               salary: 800,
               increase: false,
               favorite: false,
               id: 1,
            },
            {
               name: "Alex M.",
               salary: 3000,
               increase: true,
               favorite: true,
               id: 2,
            },
            {
               name: "Carl W.",
               salary: 5000,
               increase: false,
               favorite: false,
               id: 3,
            },
         ],
         valueSearch: "",
      };
      this.lengthEmployees = 3;
   }

   onUpdateSearch = (valueSearch) => {
      this.setState({valueSearch: valueSearch});
   }

   searchEmployee = (data, value) => {
      if (value.length === 0) {
         return data;
      }

      return data.filter((item) => {
         return item.name.includes(value);
      });
   };

   deleteItem = (id) => {
      this.setState(({data}) => {
         return {
            data: data.filter((item) => item.id !== id),
         };
      });
   };

   addEmployee = (name, salary) => {
      const newEmployee = {
         name,
         salary,
         increase: false,
         favorite: false,
         id: ++this.lengthEmployees,
      };
      this.setState(({data}) => ({
         data: [...data.slice(), newEmployee],
      }));
   };

   onToggleProps = (id, prop) => {
      console.log("it works");
      this.setState(({data}) => ({
         data: data.map((item) => {
            if (id === item.id) {
               return {...item, [prop]: !item[prop]};
            }
            return item;
         }),
      }));
   };

   render() {
      const {data, valueSearch} = this.state;
      const countEmployees = this.state.data.length;
      const incressEmployees = this.state.data.filter(
         (item) => item.increase
      ).length;
      const actualData = this.searchEmployee(data, valueSearch);

      return (
         <div className="app">
            <AppInfo
               countIncress={incressEmployees}
               countEmployees={countEmployees}
            />
            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
               <AppFilter/>
            </div>
            <EmployeeList
               data={actualData}
               onDelete={this.deleteItem}
               onToggleProps={this.onToggleProps}
            />
            <FormAddEmployee onAddEmployee={this.addEmployee}/>
         </div>
      );
   }
}

export default App;
