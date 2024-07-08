import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'puey.official@gmail.com',
      pass: 'ffur ojud jasb hjep'  
    }
  });

  export const sendVerificationEmail = async (to, verificationToken) => {
    try {
      const mailOptions = {
        from: 'puey.official@gmail.com',
        to,
        subject: 'Email Verification',
        text: `Please verify your email by clicking on the following link: http://localhost:8000/api/auth/verify/${verificationToken}`,
        html: `<p>Please verify your email by clicking on the following link:</p><a href="http://localhost:8000/api/auth/verify/${verificationToken}">Verify Email</a>`
      };
  
      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${to}`);
    } catch (error) {
      console.error('Error sending email:', error.message);
      throw new Error('Failed to send verification email');
    }
  };
  export const sendPasswordResetEmail = async (to, resetToken) => {
    try {
        const mailOptions = {
            from: 'puey.official@gmail.com',
            to,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Please click the following link to reset your password: http://localhost:8000/reset-password/${resetToken}`,
            html: `<p>You requested a password reset. Please click the following link to reset your password:</p><a href="http://localhost:8000/reset-password/${resetToken}">Reset Password</a>`
        };

        await transporter.sendMail(mailOptions);
        console.log(`Password reset email sent successfully to ${to}`);
    } catch (error) {
        console.error('Error sending password reset email:', error.message);
        throw new Error('Failed to send password reset email');
    }
};