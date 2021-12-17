import React from "react";

function RecipeList({recipes,setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const recipeList = recipes.map((recipe,index)=>{
    return(
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt="food"/></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={()=> handleRemove(index)}>Delete</button></td>
      </tr>
    )
  })

  let arr = [...recipes]
   
   function handleRemove(index){
     if(index !== -1){
       arr.splice(index,1)
       setRecipes(arr)
     }
   }


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
