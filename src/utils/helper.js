//?     EKRANDAKİ YILDIZLARI FOR DÖNGÜSÜ İLE BASTIK PRODUCTSCREENE.JSX E {getRating(item.rating)} ŞEKLİNDE YAZIP AYRICA İMPORT ETTİK

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

//getrating fonksiyonu yıldızları dışarıya return edecek
export const getRating = rating => {
    // console.log(rating);

    const ratingStar = [];

    const fullStar = <FontAwesome name="star" color="#ffa41c" size={10} />;
    const halfStar = <FontAwesome name="star-half-empty" color="#ffa41c" size={10} />
    const emptyStar = <FontAwesome name="star-o" color="#ffa41c" size={10} />

    // for döngüsü oluşturalım. let le index değeri oluşturalım başlangıç değeri 0, nereye kadar 5e kadar bir bir artsın i++
    for (let i = 0; i < 5; i++) {
        // console.log(i)
        //! rating sayısı i'den büyükse fullstar bas
        if (i < rating) {
            ratingStar.push(fullStar);
        } else {
            //! rating sayısı iden büyük değilse boşstar bas
            ratingStar.push(emptyStar);

        }
    }
    //! ratingin 1 e göre modunu alıp  eşit değilse yarım yıldız gönder.buna göre rating mode(yani%)1 eşit değilse mode 0'a  
    if (rating % 1 !== 0) {
        //console.log('rating', rating)
        ratingStar[Math.floor(rating)] = halfStar;
    }

    return ratingStar;
}