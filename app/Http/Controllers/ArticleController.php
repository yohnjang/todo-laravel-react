<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Article;
use App\Http\Resources\Article as ArticleResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        return Article::all();
    }
	public function show(Article $article)
	{
	    return $article;
	}
    
    
    /*
    public function store(Request $request)
    {
		$this->validate($request, [
        'title' => 'required|unique:articles|max:255',
        'body' => 'required',
    ]);
	    $article = Article::create($request->all());
	    return response()->json($article, 201);
    }
    */

    public function store(Request $request)
    {
        $article = $request->isMethod('put') ? Article::findOrFail($request->article_id) : new Article;
        //$article->id = $request->input('article_id');
        $article->title = $request->input('title');
        $article->body = $request->input('body');
        $article->save();
        return $article; 
        
    }













	public function update(Request $request, Article $article)
	{
	    $article->update($request->all());
	    return response()->json($article, 200);
	}
	public function delete(Article $article)
	{
	    $article->delete();
	    return response()->json(null, 204);
	}
}
