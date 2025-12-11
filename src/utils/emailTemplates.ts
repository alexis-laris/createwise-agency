export const confirmationEmailTemplate = (name: string, mensaje: string) => `
  <div style="
    font-family: Arial, sans-serif;
    padding: 30px;
    color: #F2F2F2;
    background: #050505;
  ">
    <div style="
      max-width: 600px;
      margin: auto;
      background: #0a0a0a;
      padding: 30px;
      border-radius: 20px;
      border: 1px solid #7E23D9;
    ">
      
      <h2 style="
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background: linear-gradient(to right, #7E23D9, #B679F2);
        -webkit-background-clip: text;
        color: white;
      ">
        ¡Gracias por contactarnos, ${name}!
      </h2>

      <p style="font-size: 15px; color: #F2F2F2CC; text-align: center;">
        Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo lo antes posible.
      </p>

      <div style="
        margin-top: 25px;
        padding: 15px;
        border-left: 4px solid #B679F2;
        background: #111;
        border-radius: 10px;
      ">
        <p style="margin: 0; font-style: italic; color: #F2F2F2;">
          \"${mensaje}\"
        </p>
      </div>

      <p style="margin-top: 30px; text-align: center; color: #F2F2F2AA;">
        Saludos,<br>
        <strong style="color:#B679F2;">CREATEWISE</strong>
      </p>
    </div>
  </div>
`;

export const notificationEmailTemplate = (
    name: string,
    email: string,
    mensaje: string
) => `
  <div style="
    font-family: Arial, sans-serif;
    padding: 30px;
    color: #F2F2F2;
    background: #050505;
  ">
    <div style="
      max-width: 600px;
      margin: auto;
      background: #0a0a0a;
      padding: 30px;
      border-radius: 20px;
      border: 1px solid #7E23D9;
    ">

      <h2 style="
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background: linear-gradient(to right, #7E23D9, #B679F2);
        -webkit-background-clip: text;
        color: white;
      ">
        Nuevo mensaje desde CREATEWISE
      </h2>

      <p style="font-size: 15px;">
        <strong style="color:#B679F2;">Nombre:</strong> ${name}
      </p>

      <p style="font-size: 15px;">
        <strong style="color:#B679F2;">Email:</strong> ${email}
      </p>

      <div style="
        margin-top: 20px;
        padding: 15px;
        border-left: 4px solid #B679F2;
        background: #111;
        border-radius: 10px;
      ">
        <p style="margin: 0; color:#F2F2F2;">
          ${mensaje}
        </p>
      </div>

      <p style="
        margin-top: 25px;
        font-size: 13px;
        text-align: center;
        color: #F2F2F277;
      ">
        Puedes responder directamente a este correo gracias al 
        <strong style="color:#B679F2;">reply-to</strong>.
      </p>

    </div>
  </div>
`;
