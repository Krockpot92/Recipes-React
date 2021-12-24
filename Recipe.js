import React from "react";

function Recipe({recipe,handleRemove,index}) {
    
    return(
        <>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td><img src={recipe.photo} alt="food"/></td>
          <td className="content_td"><p>{recipe.ingredients}</p></td>
          <td className="content_td"><p>{recipe.preparation}</p></td>
          <td><button name="delete" onClick={()=> handleRemove(index)}>Delete</button></td>
        </>
      )
}

export default Recipe;