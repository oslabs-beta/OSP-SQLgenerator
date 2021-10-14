import React, { useState, useEffect } from 'react';
import Columns from './Columns';


export default function Tables(props) {
  const [table, setTable] = useState([]);
  const [data, setData] = useState(props.data);
  const [tableName, setTableName] = useState('');
  
  useEffect(() => {
    const key = Object.keys(data)[0];
    setTableName(key);
    

    const updatedTable = [];
    data[key].forEach(col => {
      updatedTable.push(
        <div className="column">
          < Columns key={data[key].indexOf(col)} columns={col} />
        </div>
      );
    });
    setTable(updatedTable);
  }, []);
  
  return (
    <div>
      <div className="tableName">
        <button className="tableButton" onClick={() => {props.isOn(tableName)}}>{ tableName }</button>
      </div>
      <div className="table">
        { table }
      </div>
    </div>
  );
}