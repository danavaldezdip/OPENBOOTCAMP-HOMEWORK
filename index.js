let marker, map; 

function initMap() {
    const uluru = { 
        lat: -25.344, 
        lng: 131.031 
    };

    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    });

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });

    marker.push(
        new google.maps.Marker({
          position: {
            lat: -31.411741248964248,
            lng: -64.18782269605624,
          },
          map,
          title: "Córdoba",
        })
      );
      marker.push(
        new google.maps.Marker({
          position: {
            lat: 40.784223801881765,
            lng: -73.96610497610251,
          },
          map,
          title: "New York",
        })
      );
      marker.push(
        new google.maps.Marker({
          position: {
            lat: 47.069677760756846,
            lng: 8.310188177888064,
          },
          map,
          title: "Lucerna",
        })
      );

  }
  
  window.initMap = initMap;

  //----