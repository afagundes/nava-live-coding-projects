package br.com.nava.cadastrocontatosbackend.repository;

import br.com.nava.cadastrocontatosbackend.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContatosRepository extends JpaRepository<Contato, Long> {

}
