import React from 'react'

class App extends React.Component{

     checkDate = (month, year) => {
        const currentMonth = {
            inputData: `${month} ${year}`,
            StartingDay:new Date(year, month, 1).getDay(),
            NumberOfDays: new Date(year, month, 0).getDate()
        }
        return currentMonth
    }

    render(){
        return(
            <div>
              React is running
              {
                  console.log(this.checkDate(2,1985))
              }
            </div>
        )
    }
}

export default App