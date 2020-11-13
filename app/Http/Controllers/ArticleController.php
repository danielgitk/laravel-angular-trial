<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
//     public function index()
//     {
//         $response = ['message' => 'article index'];
//         return response($response, 200);
//     }

//     /**
//      * Show the form for creating a new resource.
//      *
//      * @return \Illuminate\Http\Response
//      */
//     // public function create()
//     // {
//     //     //
//     // }

//     /**
//      * Store a newly created resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @return \Illuminate\Http\Response
//      */
//     public function store(Request $request)
//     {
//         //
//     }

//     /**
//      * Display the specified resource.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function show($id)
//     {
//         //
//     }

//     /**
//      * Show the form for editing the specified resource.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     // public function edit($id)
//     // {
//     //     //
//     // }

//     /**
//      * Update the specified resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function update(Request $request, $id)
//     {
//      $response = ['message' => 'update function'];   
// return response($response, 200);
//     }

//     /**
//      * Remove the specified resource from storage.
//      *
//      * @param  int  $id
//      * @return \Illuminate\Http\Response
//      */
//     public function destroy($id)
//     {
//         //
//     }

public function index()
{
    error_log('I am  index.');
    return Article::all();
}

public function show($id)
{
    error_log('I am  here.');
    return Article::find($id);
}

public function store(Request $request)
{
    error_log('I am not  here.');
    //dd($request);
    return Article::create($request->all());
}

public function update(Request $request, $id)
{
    $article = Article::findOrFail($id);
    $article->update($request->all());

    return $article;
}

public function delete(Request $request, $id)
{
   echo($id);
   $article = Article::findOrFail($id);

   $article->delete();
//    $response = ['message' => 'delete function'];   
    return 204;
}
}
