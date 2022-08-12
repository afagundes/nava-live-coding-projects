package br.com.nava.cadastrocontatosbackend.controller;

import br.com.nava.cadastrocontatosbackend.model.Contato;
import br.com.nava.cadastrocontatosbackend.repository.ContatosRepository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/contatos")
public class ContatosController {

    private final ContatosRepository contatosRepository;

    public ContatosController(ContatosRepository contatosRepository) {
        this.contatosRepository = contatosRepository;
    }

    @GetMapping
    public List<Contato> listaContatos() {
        return contatosRepository.findAll();
    }

    @PostMapping
    public Contato criaContato(@RequestBody Contato contato) {
        return contatosRepository.save(contato);
    }

    @DeleteMapping("/{id}")
    public void removeContato(@PathVariable Long id) {
        contatosRepository.deleteById(id);
    }

}
