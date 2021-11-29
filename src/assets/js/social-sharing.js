function sharingFB(){
    FB.ui({
      display: 'popup',
      method: 'share',
      link: "The link you want to share", 
      picture: 'https://jmdev.fr/assets/photo-julien-marque.jpg',
      name: "The name who will be displayed on the post",
      description: "The description who will be displayed",
      href: "https://jmdev.fr"
    }, function(response){
        console.log(response)
    });
}