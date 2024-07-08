import React, { Component } from 'react'

export default class Appnewsitem extends Component {
  render() {
    let {title, description, urlToImage,nurl,authors} = this.props;
    return (

        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div style={{
     display : 'flex',
    justifyContent: 'center',
flexFlow:'row'
        }}><a rel="noreferrer" href={nurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        <div>
        <p>{authors}</p>
        </div>
                </div>


                
                
            </div>
        </div>
    </div>
    )
  }
}
