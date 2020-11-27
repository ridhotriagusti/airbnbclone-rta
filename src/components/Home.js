import React from 'react';
import './css/Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/c2b611bd-c822-469a-8ad7-73cfc77f551e.jpg?im_w=720"
                title="Seluruh rumah. Tuan rumah: Achmad Marin"
                description="4 tamu · 1 kamar tidur · 3 tempat tidur · 1 kamar mandi"
                price="$127/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/98331911-24c6-4cf4-944f-f0798963315e.jpg?im_w=720"
                title="Seluruh rumah. Tuan rumah: Nadhira"
                description="5 tamu · 1 kamar tidur · 1 tempat tidur · 1 kamar mandi + ruang toilet"
                price="$156/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/9b9447ba-82f5-4650-bf26-c4452ebd42a2.jpg?im_w=720"
                title="Kamar pribadi di bed and breakfast. Tuan rumah: Amelia"
                description="16 tamu · 4 kamar tidur · 11 tempat tidur · 0 kamar mandi bersama"
                price="$224/ malam"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/f0847f12-01b3-4e7f-9dc7-ba4319f9d142.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: M"
                description="15 tamu · 4 kamar tidur · 4 tempat tidur · 5 kamar mandi"
                price="$248/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/b8eb9df6-332b-40f7-85d3-c2dca3e5ea47.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: Imapaka"
                description="10 tamu · 4 kamar tidur · 5 tempat tidur · 3 kamar mandi + ruang toilet"
                price="$1.196/ malam"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/0aa8aa4f-b3a7-47f1-a645-b9a698b8cf17.jpg?im_w=720"
                title="Seluruh vila. Tuan rumah: Michael"
                description="6 tamu · 2 kamar tidur · 3 tempat tidur · 3 kamar mandi"
                price="$230/ malam"
            />
            </div>
        </div>
    )
}

export default Home
