const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para processar os dados do formulário
app.post('/enviar-email', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    // Configurar o serviço de e-mail (Gmail neste exemplo)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com', // Substitua pelo seu e-mail
            pass: 'sua-senha', // Substitua pela sua senha ou app password
        },
    });

    // Configuração do e-mail
    const mailOptions = {
        from: email,
        to: 'andersonwj9@gmail.com', // E-mail que vai receber a mensagem
        subject: `Contato de ${nome}`,
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
        res.status(500).send('Erro ao enviar a mensagem.');
    }
    

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'willsouzza.333@gmail.com', // Substitua pelo seu e-mail
        pass: '74402745a', // Substitua pela App Password
    },
});
