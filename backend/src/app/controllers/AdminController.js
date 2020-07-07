import Admin from '../models/Admin';
import User from '../models/User';
import Institution from '../models/Institution';

class AdminController {
  async index(req, res) {
    // Validação do owner
    const owner = await Institution.findOne({
      where: { owner_id: req.userId },
    });

    if (!owner) {
      return res
        .status(401)
        .json({ error: 'Não autorizado, ou a instituição não existe.' });
    }

    const list = await Admin.findAll({
      where: { institution_id: owner.id },
    });

    return res.json(list);
  }

  async store(req, res) {
    const { email } = req.body;
    // Validação do owner
    const institution = await Institution.findOne({
      where: { owner_id: req.userId },
    });

    if (!institution) {
      return res
        .status(401)
        .json({ error: 'Não autorizado, ou a instituição não existe.' });
    }

    // Validação do usuario
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'O usuário não existe.' });
    }

    const adminExist = await Admin.findOne({ where: { user_id: user.id } });

    if (adminExist) {
      return res.status(400).json({ error: 'O admin já existe.' });
    }

    const newAdmin = await Admin.create({
      email,
      user_id: user.id,
      institution_id: institution.id,
    });

    return res.json(newAdmin);
  }

  async delete(req, res) {
    // Validação do owner
    const ownerExist = await Institution.findOne({
      where: { owner_id: req.userId },
    });

    if (!ownerExist) {
      return res
        .status(401)
        .json({ error: 'Não autorizado, ou a instituição não existe.' });
    }

    const admin = await Admin.findByPk(req.params.id);

    await admin.destroy();

    return res.json({ Sucess: 'Admin excluido com sucesso!' });
  }
}

export default new AdminController();