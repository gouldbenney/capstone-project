import React from 'react'
import Product from '../Pages/Product'
import '../Styles/Home.css'

function Home(){

    return(
        <div className='home'>
            <img className='home__image' alt='logo' src="/images/img.png" />
    
            <div className='home__row'>
                <Product
                id='1277'
                title='Plantain'
                price={2}
                rating={5}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUVFGpjLnN3wP6nAtJOCN9bLx6yA_wT24-g&usqp=CAU'
                />

                <Product
                id='1275'
                title='Chili Pepper'
                price={0.5}
                rating={5}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKjTuOsWrly-i1Xv4DMwFdlGQUn45ylmIXA&usqp=CAU'
                />
            </div>

            <div className='home__row'>
                <Product
                id='1273'
                title='Tomatoes'
                price={1}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/6.jpg'
                />

                <Product
                id='1274'
                title='Carrots'
                price={2}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/10.jpg'
                />

                <Product
                id='1275'
                title='Cocoyam'
                price={2.5}
                rating={5}
                image='https://zippgrocery.com/wp-content/uploads/2020/05/cocoyam-root.png'
                />
            </div>    

            <div className='home__row'>
                <Product
                id='1274'
                title='Cabbage'
                price={1}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/2.jpg'
                />

                <Product
                id='1272'
                title='Yam'
                price={1}
                rating={5}
                image='https://www.allnigerianrecipes.com/wp-content/uploads/2019/04/yam-tuber.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                id='1270'
                title='Cucumber'
                price={0.5}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/5.jpg'
                />

                <Product
                id='1276'
                title='Onions'
                price={1}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/3.jpg'
                />

                <Product
                id='1271'
                title='Aubergine'
                price={2}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/4.jpg'
                />
        </div>

        <div className='home__row'>
                <Product
                id='1277'
                title='Honey'
                price={5}
                rating={5}
                image='https://5.imimg.com/data5/SELLER/Default/2020/10/CR/SW/PU/113141986/61774z6mkpl-sx679--500x500.jpg'
                />      
        </div>


        </div>
    )
}

export default Home



                