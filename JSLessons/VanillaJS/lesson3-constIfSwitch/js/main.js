// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// const - constant (local)
// var - variable (global)
// let (local)

// global

// if (true) {
//   // local global

//   if (true) {
//       // local global
//       if (true) {
//           // local
//           let a = "Hello";
//     }
//     console.log(a);
//   }

// }

// if - əgər
// else if - deyilsə əgər
// else - deyisə

// const a = "b";
// const b= "a";

// if("c" < "d"){
//     console.log(true);
// }else if(a > 3){
//     console.log('5 boyudur');
// }else{
//     console.log('get duz kod yaz ');
// }

// const myTime =14;

// if (myTime >= 5 && myTime < 13) {
//   console.log("Good morning");

//   if (myTime == 7) {
//     console.log("get up");
//   } else if (myTime == 10) {
//     console.log("have breakfast");
//   }else{
//       console.log('no activity');
//   }
// } else if (myTime >= 13 && myTime < 20) {
//   console.log("Good Afternoon");
// } else if (myTime >= 20 && myTime < 22) {
//   console.log("Good evening");
// } else if (myTime <= 23) {
//   console.log("Good night");
// } else {
//   console.log("no time");
// }

// const newTime = 5;
// const b = 5;

// switch (newTime) {
//   case "a":
//     console.log("Hello");
//     break;
//   case 10-b:
//     console.log("How a u");
//     break;
//   default:
//     console.log("no time");
// }


try{
    throw "Hello1";
documeant.write("hello");

}catch(err){
    console.log(err);
    // console.log("Texniki xeta var");

}finally{
    console.log("im running everytime");
}