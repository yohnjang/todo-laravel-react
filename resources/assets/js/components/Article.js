import React, { Component } from 'react';
 
/* Stateless component or pure component
 * { article } syntax is the object destructing
 */
const Article = ({article}) => {
    
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '65%',
    margin: '30px 10px 10px 30px'
  }
 
  //if the props article is null, return article doesn't exist
  if(!article) {
    return(<div style={divStyle}>  article Doesnt exist </div>);
  }
     
  //Else, display the article data
  return(  
    <div style={divStyle}> 
      <h2> {article.title} </h2>
      <p> { article.body} </p>
   
      
    </div>
  )
}
 
export default Article ;