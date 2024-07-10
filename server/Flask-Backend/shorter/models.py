import sqlalchemy as sa
import sqlalchemy.orm as so

from core.extensions import db
from core.models import BaseModel
from core.utils import generate_random_string

class AliasLink(BaseModel):
    __tablename__ = BaseModel.SetTableName("alias-links")

    alias_link: so.Mapped[str] = so.mapped_column(sa.String(2048), unique=True, nullable=False)
    link_id: so.Mapped[int] = so.mapped_column(sa.INTEGER, sa.ForeignKey(BaseModel.SetTableName("links")+".id", ondelete="CASCADE"), nullable=False, unique=False)


class Link(BaseModel):
    __tablename__ = BaseModel.SetTableName("links")

    url_address: so.Mapped[str] = so.mapped_column(sa.String(2048), unique=True, nullable=False)
    alias = so.relationship("AliasLink", backref="url_address", lazy="joined")

    @staticmethod
    def generate_alias_url(link_id):
        """generate unique alias url """
        default_length = 3
        counter = 0
        total_round = 0

        while True:
            if total_round == 20:
                return None

            if counter == 5:
                counter = 0
                total_round += 1
                default_length += 1

            slug_token = generate_random_string(length=default_length)
            query = db.select(AliasLink).filter_by(alias_link=slug_token)
            result = db.session.execute(query).scalar_one_or_none()
            if result: # duplicated alias link
                counter += 1
                continue
            else:
                obj = AliasLink(alias_link=slug_token, link_id=link_id)
                obj.set_public_key()
                obj.save()
                return obj


    @classmethod
    def generate_alias_link(cls, url: str) -> AliasLink:
        query = db.select(Link).filter_by(url_address=url).distinct()
        result = db.session.execute(query).unique().scalar_one_or_none()
        if result:
            return result.alias

        new_link = Link(url_address=url)
        new_link.set_public_key()
        new_link.save()
        alias_obj = cls.generate_alias_url(new_link.id)
        return alias_obj
