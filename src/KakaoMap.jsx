import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap() {
  // useEffect(()=>{},[]);
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level:3 // 지도의 확대 레벨 
    }; 

var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude-0.00002, // 위도
            lon = position.coords.longitude-0.0028; // 경도
        
        var locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new window.kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    
    // const mapContainer = document.getElementById("map");
    // // 지도를 표시할 div
    // const mapOption = {
    //   center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    //   level: 4, // 지도의 확대 레벨
    // };
    // const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // // var markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

    // // // 마커를 생성합니다
    // // var marker = new window.kakao.maps.Marker({
    // //   position: markerPosition,
    // // });

    // // // 마커가 지도 위에 표시되도록 설정합니다
    // // marker.setMap(map);

    // var geocoder = new window.kakao.maps.services.Geocoder();

    // geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

    //     // 정상적으로 검색이 완료됐으면 
    //      if (status === window.kakao.maps.services.Status.OK) {
    
    //         var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
    
    //         // 결과값으로 받은 위치를 마커로 표시합니다
    //         var marker = new window.kakao.maps.Marker({
    //             map: map,
    //             position: coords
    //         });
    
    //         // 인포윈도우로 장소에 대한 설명을 표시합니다
    //         var infowindow = new window.kakao.maps.InfoWindow({
    //             content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
    //         });
    //         infowindow.open(map, marker);
    
    //         // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    //         map.setCenter(coords);
    //     }
    // }); 
  }, []);

  return <Box as="div" w="full" h="300px" id="map"></Box>;
}
