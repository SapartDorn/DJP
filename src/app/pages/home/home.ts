import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  currentYear = new Date().getFullYear();
  
  empresa = {
    nome: 'DJP Logística',
    slogan: 'Conectando o Brasil com Eficiência',
    descricao: 'Somos uma empresa especializada em soluções logísticas completas, oferecendo transporte rodoviário, armazenagem, distribuição e consultoria em supply chain para empresas de todos os segmentos.',
    sobre: 'Com 2 anos de experiência no mercado logístico, a DJP Logística se consolidou como referência em transporte e distribuição, oferecendo soluções personalizadas que otimizam a cadeia de suprimentos dos nossos clientes.',
    missao: 'Proporcionar soluções logísticas eficientes e sustentáveis, conectando empresas e pessoas através de um serviço de transporte confiável e inovador.',
    visao: 'Ser reconhecida como a principal empresa de logística do país, conhecida pela excelência operacional, inovação tecnológica e compromisso com a sustentabilidade.',
    valores: 'Eficiência operacional, inovação constante, sustentabilidade, compromisso com prazos e relacionamento duradouro com nossos clientes e parceiros.',
    contato: {
      telefone: '(11) 3456-7890',
      email: 'contato@djplogistica.com.br',
      endereco: 'Rua dos Transportes, 456 - São Paulo, SP'
    }
  };

  servicos = [
    {
      titulo: 'Transporte Rodoviário',
      descricao: 'Oferecemos soluções completas em transporte rodoviário de cargas, com frota moderna e rastreamento em tempo real.',
      icone: 'icon-code',
      caracteristicas: [
        'Frota moderna e segura',
        'Rastreamento em tempo real',
        'Cobertura nacional',
        'Seguro de carga incluído'
      ]
    },
    {
      titulo: 'Armazenagem e Estoque',
      descricao: 'Centros de distribuição estratégicos com controle total de estoque e gestão de inventário.',
      icone: 'icon-consulting',
      caracteristicas: [
        'Centros de distribuição estratégicos',
        'Controle total de estoque',
        'Gestão de inventário',
        'Cross-docking e consolidação'
      ]
    },
    {
      titulo: 'Distribuição Urbana',
      descricao: 'Soluções especializadas para entrega urbana, last mile e distribuição regional.',
      icone: 'icon-cloud',
      caracteristicas: [
        'Entrega urbana especializada',
        'Last mile otimizado',
        'Distribuição regional',
        'Agendamento de entregas'
      ]
    },
    {
      titulo: 'Consultoria Logística',
      descricao: 'Orientamos sua empresa na otimização da cadeia de suprimentos e redução de custos logísticos.',
      icone: 'icon-support',
      caracteristicas: [
        'Análise de processos logísticos',
        'Otimização de rotas',
        'Redução de custos',
        'Implementação de melhores práticas'
      ]
    }
  ];

  diferenciais = [
    {
      numero: '2',
      titulo: 'Anos de Experiência',
      descricao: 'Mais de uma década e meia transportando cargas e otimizando cadeias de suprimentos.'
    },
    {
      numero: '1000+',
      titulo: 'Entregas por Mês',
      descricao: 'Milhares de entregas realizadas mensalmente com segurança e pontualidade.'
    },
    {
      numero: '98%',
      titulo: 'Pontualidade',
      descricao: 'Alto índice de entregas no prazo, garantindo a satisfação dos nossos clientes.'
    },
    {
      numero: '24/7',
      titulo: 'Rastreamento',
      descricao: 'Monitoramento em tempo real de todas as cargas, 24 horas por dia.'
    }
  ];
}
