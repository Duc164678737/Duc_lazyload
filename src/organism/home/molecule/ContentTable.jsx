import React from 'react'
import useGetUser from '../hook/useGetUser'


const ContentTable = () => {
    let {columns, users} = useGetUser()
    console.log(users);
  return (
    <div>
        <table>
          <thead>
            <tr>
              {columns.map((head,index) => (
                <th key={index}>{head.Header}</th>
              ))}
              
            </tr>
          </thead>
          <tbody>
            {users.map((row, index) => (
              <tr key={index}>
                {columns.map((col,index)=> (
                    <th key={index}>
                      {col.customFuntion 
                      ? (col.customFuntion(row)) 
                      : <span>{row[col.field]}</span>
                    }
                    </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ContentTable