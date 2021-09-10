<?php
namespace APP\Models;
use CodeIgniter\Model;
class Modeldsn extends Model{
    protected $table = 'tb_dosen';
    protected $primaryKey= 'id_dosen';
    protected $allowedFields=['id_dosen', 'nama_dosen','alamat', 'email', 'pendidikan'];
}
