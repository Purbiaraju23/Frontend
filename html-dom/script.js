const names=["Raju Purbia","Hardik Limbachiya","Jainil Modi","Smit Italiya"];

const image=["https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png","https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png","https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"];

const age=[22,21,22,20];

for(i=0;i<names.length;i++)
{
    var cardDiv = document.createElement("div");
    cardDiv.className = "card"; 

    var userImageElement = document.createElement("img");
    userImageElement.className = "user-image";
    userImageElement.src = image[i]; 
    userImageElement.alt = "User Image";

    var userNameElement = document.createElement("h2");
    userNameElement.textContent = names[i];

    var ageElement = document.createElement("p");
    ageElement.textContent = "Age:" + age[i];

    cardDiv.appendChild(userImageElement);
    cardDiv.appendChild(userNameElement);
    cardDiv.appendChild(ageElement);

    document.body.appendChild(cardDiv);
}
