<?php
namespace APP\Models;
use CodeIgniter\Model;
class Modelmhs extends Model{
    protected $table ='tb_mahasiswa';
    protected $primaryKey='nobp';
    protected $allowedFields=['nobp','nama','alamat','telpon', 'email', 'jurusan_id'];
}
?>