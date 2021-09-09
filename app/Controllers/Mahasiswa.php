<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\Modelmhs; 
use CodeIgniter\Controller;
use CodeIgniter\Model;

class Mahasiswa extends ResourceController
{
    use ResponseTrait;
    public function index()
    {
        $modelMhs = new Modelmhs();
        $data = $modelMhs->findAll();
        return $this->respond($data, 200);
    }
    public function show($nobp = null)
    {
        $modelMhs = new Modelmhs();
        $modelMhs->join('tb_jurusan', 'tb_jurusan.id_jurusan = tb_mahasiswa.jurusan_id');
        $data = $modelMhs->getWhere(['nobp' => $nobp])->getResult();
        if ($data) {
            return $this->respond($data);
        }else{
            return $this->failNotFound("Maaf Nobp : ".$nobp." Tidak Ditemukan");
        }
    }
    public function create()
    {
        $modeMhs= new Modelmhs();
        // $data=[
        //     'nobp'=>$this->request->getPost('nobp'),
        //     'nama'=>$this->request->getPost('nama'),
        //     'alamat' => $this->request->getPost('alamat'),
        //     'telpon' => $this->request->getPost('phone'),
        //     'email' => $this->request->getPost('email'),
        //     'jurusan_id' => $this->request->getPost('id_jurusan'),
        // ];
        $data=json_decode(file_get_contents('php://input'),true);
        $modeMhs->insert($data);
        $response = [
            'status' => true,
            'message' => [
                'success' => 'Simpan data Berhasil',
                'data' => $data,
            ]
        ];
        return $this->respond($response, 201);
    }
    public function delete($id= null)
    {
        $modeMhs = new Modelmhs();

        $cekData = $modeMhs->find($id);
        if($cekData){
            $modeMhs->delete($id);
            $response=[
                'status' => true,
                'message' => [
                    'success' => 'Hapus data Berhasil',
                    'data'=> $id,
                ]
                ];
                return $this->respondDeleted($response);
        }else{
            return json_encode([
                'status'=>false,
                'message' => [
                    'success' => 'Data gak ditemukan cuk',
                    'data'=> $id
                ]
                ]);
        }
    }
    public function update($id=null)
    {
        $modelMhs = new Modelmhs();
        $json=$this->request->getJSON();
        $json = json_decode(file_get_contents('php://input'), true);
        if($json){
        $modelMhs->update($id, $json);
        $response = [
            'status' => true,
            'message' => [
                'success' => 'update data Berhasil',
                'data' => $id,
            ]
        ];
        return $this->respond($response);
        }else{
            return json_encode([
                'status'=> false,
                'message' => [
                    'success' => 'kamu belum udabh apapun',
                    'data' => $id,
                ]
                ]);
        }
       
    }
}
