import React from 'react';
import Post from './Post';


export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Teste"/>
                <Post title="Segundo teste"/>
                <Post  title="Masoq"/>

            </div>
        );
    }
}