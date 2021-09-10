<?php
namespace APP\Models;
use CodeIgniter\Model;
class Modelmtk extends Model{
    protected $table = 'tb_matakuliah';
    protected $primaryKey= 'id_matakuliah';
    protected $allowedFields=['id_matakuliah', 'nama_matakuliah', 'sks', 'dosen_id'];
}
?>