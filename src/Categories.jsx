import React from "react";

const Categories = ({category,handleFilter}) => {


  return <div className="btn-container">
    {
        category.map(((c,index)=>{
            return <button key={index}
                        className="btn"
                        onClick={()=>handleFilter(c)}>
                            {c}</button>
        }))
    }
  </div>;
};

export default Categories;
