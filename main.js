var images = ["father.jpg","mother.jpg","brother.jpg","myself.jpg", "dog.jpg"];
var names = ["Dhruv Pal Singh","Nupur Shree","Yaduvir Singh","Bharat Pal Singh", "Dazzle (My Pet)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}