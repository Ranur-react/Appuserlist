<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ModelJurusan; 
use CodeIgniter\Controller;

class Jurusan extends ResourceController
{
    use ResponseTrait;
    public function index()
    {
        $modelMhs = new ModelJurusan();
        $data = $modelMhs->findAll();
        return $this->respond($data, 200);
    }
    
}
