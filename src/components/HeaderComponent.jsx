import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props)
    {
          super(props)
          this.state= {
             students:[]
          }
    }
 
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href="https://javaguides.net" className='navbar-brand'>Student Management App</a></div>
                        </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;