import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import AddArticle from './AddArticle';

export default class Main extends Component {
    constructor() {
   
        super();
        //Initialize the state in the constructor
        this.state = {
            articles: [],
            currentArticle: null
        }
        this.handleAddArticle = this.handleAddArticle.bind(this);
      }
      /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
      componentDidMount() {
        /* fetch API in action */
        fetch('/api/articles')
            .then(response => {
                return response.json();
            })
            .then(articles => {
                //Fetched product is stored in the state
                this.setState({ articles });
            });
      }
     
    

     renderArticles() {
        return this.state.articles.map(article=> {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li onClick={
                    () =>this.handleClick(article)} key={article.id} >
                    { article.title } 
                </li>      
            );
        })
      }
       
      handleClick(article) {
        //handleClick is used to set the state
        this.setState({currentArticle:article});
       
      }

      handleAddArticle(article) {
        /*Fetch API for post request */
        fetch( 'api/articles', {
            method:'post',
            /* headers are important*/
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(article)
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then( data => {
           
            this.setState((prevState)=> ({
                articles: prevState.articles.concat(data),
                currentArticle : data
            }))
        })
     //update the state of products and currentProduct
      }  


      render() {
       /* Some css code has been removed for brevity */
        return (
            <div>
                <div>
                    <h2>Articles</h2>
                    <ul>
                        { this.renderArticles() }
                    </ul> 
                </div> 
                <Article article={this.state.currentArticle} />
                <AddArticle onAdd={this.handleAddArticle} /> 
            </div>
        );
      }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
