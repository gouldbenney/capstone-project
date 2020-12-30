import React from 'react'
import Product from '../Pages/Product'
import '../Styles/Home.css'

function Home(){

    return(
        <div className='home'>
            <img className='home__image' alt='logo' src="/images/img.png" />
    
            <div className='home__row'>
                <Product
                id='1270'
                title='Cucumber'
                price={1.5}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/5.jpg'
                />

                <Product
                id='1271'
                title='Cabbage'
                price={2}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/4.jpg'
                />

                <Product
                id='1272'
                title='Yam'
                price={1.5}
                rating={5}
                image='https://www.allnigerianrecipes.com/wp-content/uploads/2019/04/yam-tuber.jpg'
                />

                <Product
                id='1276'
                title='Shallots'
                price={1}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/3.jpg'
                />

            </div>

            <div className='home__row'>

                <Product
                id='1273'
                title='Cocoyam'
                price={1}
                rating={4}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/6.jpg'
                />

                <Product
                id='1274'
                title='Pepper'
                price={2}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/2.jpg'
                />

                <Product
                id='1275'
                title='Onions'
                price={5}
                rating={5}
                image='https://images.unsplash.com/photo-1508747703725-719777637510?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />

                <Product
                id='1277'
                title='Carrots'
                price={2}
                rating={5}
                image='https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=861&q=80'
                />

        </div>        
        <div className='home__row'>

                <Product
                id='1274'
                title='Pepper'
                price={2}
                rating={5}
                image='https://images.unsplash.com/photo-1601602062684-803b28de2a76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
                />

                <Product
                id='1274'
                title='Pepper'
                price={2}
                rating={5}
                image='http://react.pixelstrap.com/assets/images/vegetables/pro/2.jpg'
                />

                <Product
                id='1275'
                title='Onions'
                price={5}
                rating={5}
                image='https://images.unsplash.com/photo-1508747703725-719777637510?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                />

                <Product
                id='1277'
                title='Carrots'
                price={2}
                rating={5}
                image='https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=861&q=80'
                />

        </div>
        </div>
    )
}

export default Home