<?php
namespace APP\Models;
use CodeIgniter\Model;
class ModelJurusan extends Model{
    protected $table ='tb_jurusan';
    protected $primarykey='id_jurusan';
    protected $allowedFields=['id_jurusan', 'nama_jurusan'];
}
?>