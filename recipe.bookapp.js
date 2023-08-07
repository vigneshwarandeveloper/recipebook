const apikey="54acdff4b2624952a5a1cdb5e8201f9d";





async function getrecipe(){
    const response = await fetch(`https:api.spoonacular.com/recipes/random?number=10&apikey=${apikey}`);
    
    const data=await response.json;
    return data.recipes

}








async function init(){
    const recipe=await getrecipe();
    console.log(recipe);
}
init()