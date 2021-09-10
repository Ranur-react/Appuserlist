<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\Modelmtk;
use CodeIgniter\Controller;
use CodeIgniter\Model;

class Matakuliah extends ResourceController
{
    use ResponseTrait;
    public function index()
    {
        $modelMhs = new Modelmtk();
        $modelMhs->join('tb_dosen', 'tb_dosen.id_dosen = tb_matakuliah.dosen_id');
        $data = $modelMhs->findAll();
        return $this->respond($data, 200);
    }
    public function show($id = null)
    {
        $modelMhs = new Modelmtk();
        $modelMhs->join('tb_dosen', 'tb_dosen.id_dosen = tb_matakuliah.dosen_id');
        $data = $modelMhs->getWhere(['id_matakuliah' => $id])->getResult();
        if ($data) {
            return $this->respond($data);
        } else {
            return $this->failNotFound("Maaf  : " . $id . " Tidak Ditemukan");
        }
    }
    public function create()
    {
        $modeMhs = new Modelmtk();
        $data = json_decode(file_get_contents('php://input'), true);
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
    public function delete($id = null)
    {
        $modeMhs = new Modelmtk();

        $cekData = $modeMhs->find($id);
        if ($cekData) {
            $modeMhs->delete($id);
            $response = [
                'status' => true,
                'message' => [
                    'success' => 'Hapus data Berhasil',
                    'data' => $id,
                ]
            ];
            return $this->respondDeleted($response);
        } else {
            return json_encode([
                'status' => false,
                'message' => [
                    'success' => 'Data gak ditemukan cuk',
                    'data' => $id
                ]
            ]);
        }
    }
    public function update($id = null)
    {
        $modelMhs = new Modelmtk();
        $json = $this->request->getJSON();
        $json = json_decode(file_get_contents('php://input'), true);
        if ($json) {
            $modelMhs->update($id, $json);
            $response = [
                'status' => true,
                'message' => [
                    'success' => 'update data Berhasil',
                    'data' => $id,
                ]
            ];
            return $this->respond($response);
        } else {
            return json_encode([
                'status' => false,
                'message' => [
                    'success' => 'kamu belum udabh apapun',
                    'data' => $id,
                ]
            ]);
        }
    }
}
