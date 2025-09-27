import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  currentYear = new Date().getFullYear();
  
  // Formulário de contato
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initializeContactForm();
  }

  private initializeContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';
      this.submitSuccess = false;

      try {
        const formData = this.contactForm.value;
        const result = await this.contactService.sendEmail(formData);
        
        this.submitMessage = result.message;
        this.submitSuccess = result.success;
        
        if (result.success) {
          this.contactForm.reset();
        }
      } catch (error) {
        this.submitMessage = 'Erro inesperado. Tente novamente.';
        this.submitSuccess = false;
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} é obrigatório`;
      }
      if (field.errors['email']) {
        return 'Email inválido';
      }
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} deve ter pelo menos ${requiredLength} caracteres`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem'
    };
    return labels[fieldName] || fieldName;
  }
  
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
